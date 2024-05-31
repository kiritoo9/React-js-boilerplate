/**
 * CoreState Helper
 * Global state function for all cases
 * 
 * @version 1.1
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

class State {
    pathname = null;
    use_active_state = false;

    constructor(state_name = null, use_active_state = false) {
        this.use_active_state = use_active_state;
        const storage = this.Storage.getState();

        if(state_name && !use_active_state) {
            this.pathname = state_name;

            storage.setActiveState(this.pathname); // 
        } else if(!use_active_state) {
            var current_url = window.location.pathname.replace(/\//g, '_');
            current_url = current_url.replace(/&/g, '_');
            current_url = current_url.replace(/\?/g, '_');
            current_url = current_url.replace(/=/g, '_');
            current_url = current_url.replace(/-/g, '_');

            this.pathname = current_url;
            storage.setActiveState(this.pathname);
        } else if(use_active_state) {
            /**
             * set pathname with active state
             */
            this.pathname = storage.active_state;
        }
    }

    Storage = create(
        persist(
            (set, get) => ({
                collection: {},
                active_state: null,
                getItem: (f, parent = false) => {
                    /**
                     * Check active state
                     */
                    if(this.use_active_state) this.pathname = get().active_state;

                    if(parent) return get().collection[f] !== undefined ? get().collection[f] : null;
                    
                    if(get().collection[this.pathname] === undefined) return null;
                    const data = get().collection[this.pathname][f];
                    if(data !== undefined) {
                        return data?.value !== undefined ? data.value : data;
                    } else {
                        return null;
                    }
                },
                getAllItem: (static_pathname = '') => {
                    /**
                     * Check active state
                     */
                    if(this.use_active_state) this.pathname = get().active_state;

                    const path = static_pathname ? static_pathname : this.pathname;
                    return get().collection[path];
                },
                setActiveState: (state_name) => {
                    return set({active_state: state_name});
                },
                setItem: (f, v, parent = false) => {
                    /**
                     * Check active state
                     */
                    if(this.use_active_state) this.pathname = get().active_state;

                    let coll = get().collection;    
                    if(!parent) {
                        if(coll[this.pathname] === undefined) {
                            coll[this.pathname] = {[f]: v};
                        } else {
                            if(coll[this.pathname][f]?.value !== undefined) {
                                coll[this.pathname][f].value = v?.value !== undefined ? v.value : v;
                            } else {
                                coll[this.pathname][f] = v;
                            }
                        }
                    } else {
                        coll[f] = v;
                    }
    
                    set({collection: coll});
                },
                removeItem: (f, parent = false) => {
                    /**
                     * Check active state
                     */
                    if(this.use_active_state) this.pathname = get().active_state;

                    let coll = get().collection;
    
                    if(!parent) {
                        delete coll[this.pathname][f];
                    } else {
                        delete coll[f];
                    }
                    set({collection: coll});
                },
                flush: () => {
                    /**
                     * This method will remove all data by pathname (children only)
                     * Be careful when call this one!
                     */
                    let coll = get().collection;

                    /**
                     * Check active state
                     */
                    if(this.use_active_state) this.pathname = get().active_state;
    
                    if(coll[this.pathname] !== undefined) delete coll[this.pathname];
                    set({collection: coll});
                }
            }),
            {
                name: 'APP_CORE_STORAGE_V1',
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )

}

export default State;
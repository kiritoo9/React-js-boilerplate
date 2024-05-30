/**
 * CoreState Helper
 * Global state function for all cases
 * 
 * @version 1.1
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

var pathname = window.location.pathname.replace(/\//g, '_');
pathname = pathname.replace(/&/g, '_');
pathname = pathname.replace(/\?/g, '_');
pathname = pathname.replace(/=/g, '_');
pathname = pathname.replace(/-/g, '_');

const Core = create(
    persist(
        (set, get) => ({
            collection: {},
            getItem: (f, parent = false) => {
                if(parent) return get().collection[f] !== undefined ? get().collection[f] : null;
                
                if(get().collection[pathname] === undefined) return null;
                const data = get().collection[pathname][f];
                if(data !== undefined) {
                    return data?.value !== undefined ? data.value : data;
                } else {
                    return null;
                }
            },
            getAllItem: (custom_pathname = '') => {
                const path = custom_pathname ? custom_pathname : pathname;
                return get().collection[path];
            },
            setItem: (f, v, parent = false) => {
                let coll = get().collection;

                if(!parent) {
                    if(coll[pathname] === undefined) {
                        coll[pathname] = {[f]: v};
                    } else {
                        if(coll[pathname][f]?.value !== undefined) {
                            coll[pathname][f].value = v?.value !== undefined ? v.value : v;
                        } else {
                            coll[pathname][f] = v;
                        }
                    }
                } else {
                    coll[f] = v;
                }

                set({collection: coll});
            },
            removeItem: (f, parent = false) => {
                let coll = get().collection;
                if(!parent) {
                    delete coll[pathname][f];
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
                if(coll[pathname] !== undefined) delete coll[pathname];
                set({collection: coll});
            }
        }),
        {
            name: 'APP_CORE_STORAGE_V1',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);

export default Core;
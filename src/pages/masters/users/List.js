import { Card } from "react-bootstrap";
import { Grid, _ } from "gridjs-react";
import { PluginPosition, h } from "gridjs";

function UserList() {

    const FilterDate = () => {
        return h(`h1`, {}, `This will be filter inputs`);
    }

    return (
        <div>
            <Card className="bg-white">
                <Card.Header className="bg-primary">
                    <Card.Title as="label" className="fs-sm fw-medium mb-1 text-white">User List</Card.Title>
                </Card.Header>
                <Card.Body className="bg-white">
                <Grid
                    className={{table: 'table table-bordered mb-0'}}
                    resizable={true}
                    columns={[
                        'Pokemon',
                        'URL'
                    ]}
                    server={{
                        url: 'https://pokeapi.co/api/v2/pokemon',
                        then: data => data.results.map(r => [
                            r.name, 
                            _(<a href={r.url}>Detail Informations to {r.name}</a>)
                        ]),
                        total: data => data.count
                    }}
                    pagination={{
                        limit: 10,
                        server: {
                            url: (prev, page, limit) => {
                                const operator = prev.includes('?') ? '&' : '?';
                                return `${prev}${operator}limit=${limit}&offset=${page * limit}`
                            }
                        }
                    }}
                    search={{
                        server: {
                            url: (prev, keyword) => `${prev}?search=${keyword}`
                        }
                    }}
                    plugins={[
                        {
                            id: 'filter-date',
                            component: FilterDate,
                            order: 1,
                            position: PluginPosition.Header
                        }
                    ]}
                />
                </Card.Body>
            </Card>
        </div>
    )

}

export default UserList;
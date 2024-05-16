import { Link, useParams } from "react-router-dom";

function Dashboard2() {

    const { id } = useParams();

    return (
        <div>
            <h1>This is dashboard 2 with id = {id}</h1>

            <Link to="/dashboard" className="btn btn-primary">Back to first dashboard</Link>
        </div>
    )
}

export default Dashboard2;
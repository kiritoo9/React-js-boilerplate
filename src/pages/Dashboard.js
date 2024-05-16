import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
    /**
     * Render view
     */
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                    <ol className="breadcrumb fs-sm mb-1">
                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Welcome</li>
                    </ol>
                </div>
            </div>

            <Row className="g-3">
                <Col xl="12">
                    <Card className="card">
                        <Card.Header className="bg-primary">
                            <Card.Title as="label" className="fs-sm fw-medium mb-1 text-white">Welcome to Dashboard</Card.Title>
                        </Card.Header>
                        <Card.Body className="bg-white">
                            <p>Hello world</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;
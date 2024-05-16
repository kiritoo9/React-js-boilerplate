function Dashboard() {
    /**
     * Render view
     */
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                    <ol className="breadcrumb fs-sm mb-1">
                        <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Sales Monitoring</li>
                    </ol>
                    <h4 className="main-title mb-0">Welcome to Dashboard</h4>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
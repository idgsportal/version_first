/**
 * Reusable Dashboard Card Component
 * Usage: <DashboardCard icon={Icon} title="Title" count={123} gradient="green" onClick={handler} />
 */

export function DashboardCard({
    icon: Icon,
    title,
    count,
    gradient,
    iconColor,
    borderColor,
    onClick,
}) {
    const gradientClasses = {
        green: 'gradient-green',
        orange: 'gradient-orange',
        red: 'gradient-red',
        blue: 'gradient-blue',
        purple: 'gradient-purple',
    };

    return (
        <button
            onClick={onClick}
            className="dashboard-card text-left"
        >
            {/* Icon & Count */}
            <div className="flex items-start justify-between mb-4">
                <div
                    className={`icon-box-lg ${gradientClasses[gradient]} border ${borderColor}`}
                >
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>

                <div className="text-right">
                    <div className="count-display">{count}</div>
                    <div className="count-label">Total</div>
                </div>
            </div>

            {/* Title */}
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle">Click to view details</p>
        </button>
    );
}

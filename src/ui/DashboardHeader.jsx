
export function DashboardHeader({
    icon: Icon,
    title,
    subtitle,
    iconColor = 'blue',
}) {
    const iconColorClasses = {
        blue: 'icon-box-blue text-blue-primary',
        green: 'icon-box-green text-green-primary',
        purple: 'icon-box-purple text-purple-primary',
        orange: 'icon-box-orange text-orange-primary',
        red: 'icon-box-red text-red-primary',
    };

    const [gradientClass, textColorClass] =
        iconColorClasses[iconColor].split(' ');

    return (
        <div className="dashboard-header">
            <div className="flex items-center gap-3">
                <div className={`icon-box ${gradientClass}`}>
                    <Icon className={`w-6 h-6 ${textColorClass}`} />
                </div>
                <div>
                    <h1 className="card-title">{title}</h1>
                    <p className="card-subtitle">{subtitle}</p>
                </div>
            </div>
        </div>
    );
}

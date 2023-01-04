import iconDecrease from '../../assets/icons/trend-decrease.svg'
import iconIncrease from '../../assets/icons/trend-increase.svg'
const StatsCard = ({ label, stat, trendStat, trend, icon }) => {
  const trendColor =
    trend === 'increase'
      ? {
          bgColor: 'bg-green-200',
          textColor: 'text-green-700',
          icon: iconIncrease
        }
      : { bgColor: 'bg-red-200', textColor: 'text-red-700', icon: iconDecrease }
  return (
    <div className="rounded shadow-lg bg-white border border-green-200 overflow-hidden">
      <div className="flex justify-between p-6">
        <div>
          <p className="text-sm font-bold uppercase mb-1">{label}</p>
          <p className="text-4xl text-wsblue-400 font-light">{stat}</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-wsblue-200 flex flex-col justify-center items-center">
          <img src={icon} alt="WSPs" className="h-6 w-6" />
        </div>
      </div>
      <div
        className={`flex justify-center text-sm p-2 ${trendColor.bgColor} ${trendColor.textColor}`}
      >
        <img
          src={iconIncrease}
          className={`w-4 h-4 mr-4 ${trendColor.textColor}`}
        />
        <p>{`${trendStat}% ${trend}`}</p>
      </div>
    </div>
  )
}

export default StatsCard

export default function DisclaimerBanner() {
  return (
    <div className="bg-yellow-500/10 border-b border-yellow-500/20 py-2 sm:py-3">
      <div className="container px-4 text-xs sm:text-sm text-center">
        <p className="mb-1 sm:mb-2">
          ZorvaPlex is a completely free social platform created solely for entertainment. There is no real money
          involved, no prizes or cash rewards. All gameplay is entirely virtual and holds no financial value. This
          service is intended strictly for users aged 18 and older.
        </p>
        <p>
          If you ever feel it's no longer enjoyable, take a break. For advice or support, please visit trusted
          organizations such as{" "}
          <span className="font-medium">
            <a
              href="https://www.gordonmoody.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Gordon Moody
            </a>
            ,{" "}
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GamCare
            </a>
            , or{" "}
            <a
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              BeGambleAware
            </a>
          </span>
          .
        </p>
      </div>
    </div>
  )
}

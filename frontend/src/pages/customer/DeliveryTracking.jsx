import { useEffect, useRef, useState } from 'react'

export default function DeliveryTracking() {
  const [minutesLeft, setMinutesLeft] = useState(12)
  const [progress, setProgress] = useState(0.6)
  const partnerIconRef = useRef(null)
  const routePathRef = useRef(null)

  useEffect(() => {
    let animationFrameId

    const updateProgress = () => {
      if (Math.random() > 0.995 && minutesLeft > 1) {
        setMinutesLeft((prev) => prev - 1)
      }

      setProgress((prev) => {
        let next = prev + 0.0008
        if (next > 1) next = 0.6

        if (routePathRef.current && partnerIconRef.current) {
          const totalLength = routePathRef.current.getTotalLength()
          const point = routePathRef.current.getPointAtLength(next * totalLength)
          partnerIconRef.current.setAttribute(
            'transform',
            `translate(${point.x}, ${point.y})`,
          )
        }
        return next
      })

      animationFrameId = requestAnimationFrame(updateProgress)
    }

    animationFrameId = requestAnimationFrame(updateProgress)
    return () => cancelAnimationFrame(animationFrameId)
  }, [minutesLeft])

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-3xl shadow-card p-6 mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant">Delivery tracking</p>
              <h2 className="font-literata text-2xl text-primary">
                Arriving in {minutesLeft} mins
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary text-xs font-semibold">
              LIVE
            </span>
          </div>
          <div className="relative h-[420px] rounded-3xl overflow-hidden bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALgGSNzJFn0WhK51iauuNuSCEnOYVsxufScH8nFZYYCJH7vtQmwlE8QgBVXvUUUb-a9kz7RMhxqEGmqs_bX4trUKb-EfpSK7FClpEwBcpCc7VBGOLzZTqJNwTsJhqhpi5n8_hjcneQKnbgA-CQ0RYPZoCj1F8K7ryJt4Kt7keKa5P_Mut6kCETvlo97lLhj3trsDta4ahdp8kfrnkQUh9tLUE_p4UIKRGrxsnLiA6y4u90CUmDdMfpKmPZHV0IxIo82NRA4WxNLVc"
              alt="Map"
              className="w-full h-full object-cover opacity-70"
            />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 450">
              <path
                ref={routePathRef}
                d="M 50,350 Q 200,380 300,250 T 550,50"
                fill="none"
                stroke="#154212"
                strokeDasharray="10 5"
                strokeLinecap="round"
                strokeWidth="4"
              />
              <circle cx="50" cy="350" r="8" fill="#154212" />
              <circle cx="550" cy="50" r="8" fill="#fdbc13" />
              <g ref={partnerIconRef} style={{ transform: 'translate(50px, 350px)' }}>
                <circle r="14" fill="#154212" opacity="0.25" />
                <circle r="10" fill="#154212" />
              </g>
            </svg>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl shadow-card p-6">
            <h3 className="font-semibold mb-2">Delivery Partner</h3>
            <p className="text-on-surface-variant text-sm">Rahul S. • 4.9 rating</p>
          </div>
          <div className="bg-white rounded-3xl shadow-card p-6">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <p className="text-on-surface-variant text-sm">Organic Strawberries, Eggs</p>
            <div className="mt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-primary">$28.50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, MapPin } from "lucide-react"

export default function IpBanner() {
  const [ip, setIp] = useState("Loading...")
  const [location, setLocation] = useState("Loading...")
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchIpInfo = async () => {
      try {
        setIsLoading(true)
        // Using ipify API to get the user's IP address and location
        const response = await fetch("https://api.ipify.org?format=json")
        const data = await response.json()
        setIp(data.ip)

        // Get location information based on IP
        const geoResponse = await fetch(`https://ipapi.co/${data.ip}/json/`)
        const geoData = await geoResponse.json()

        if (geoData.error) {
          throw new Error("Could not get location data")
        }

        const locationString = `${geoData.city || ""}, ${geoData.country_name || "Unknown"}`
        setLocation(locationString)
        setError(false)
      } catch (err) {
        console.error("Error fetching IP info:", err)
        setError(true)
        setIp("Could not detect")
        setLocation("Unknown location")
      } finally {
        setIsLoading(false)
      }
    }

    fetchIpInfo()
  }, [])

  if (!isVisible) return null

  return (
    <div className="w-full bg-primary text-primary-foreground py-2 px-4">
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <div className="flex-1 text-center sm:text-left mb-2 sm:mb-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <div className="flex items-center justify-center sm:justify-start gap-1">
              <span>Your IP Address: </span>
              <span className="font-medium">
                {isLoading ? (
                  <span className="inline-block w-24 h-4 bg-primary-foreground/20 animate-pulse rounded"></span>
                ) : (
                  ip
                )}
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-1">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">
                {isLoading ? (
                  <span className="inline-block w-40 h-4 bg-primary-foreground/20 animate-pulse rounded"></span>
                ) : (
                  location
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/what-is-vpn" className="font-medium underline text-sm">
            Hide your personal data with Novix VPN
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="text-primary-foreground/80 hover:text-primary-foreground"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}


import { useEffect } from 'react'
import ReactGA from 'react-ga'

export const useAnalytics = (trackingId) => {
  useEffect(() => {
    if (trackingId && trackingId !== 'GA_MEASUREMENT_ID') {
      ReactGA.initialize(trackingId)
    }
  }, [trackingId])

  useEffect(() => {
    // Track page views
    if (trackingId && trackingId !== 'GA_MEASUREMENT_ID') {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [])
}

export const trackEvent = (category, action, label) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.event({
      category,
      action,
      label,
    })
  }
}

// Feature flags for controlling access to features
// These can be toggled for A/B testing or monetization purposes

export const FEATURE_FLAGS = {
  /** 
   * Controls access to the word history view
   * Set to false to show "unavailable" popup (for premium/monetization)
   */
  HISTORY_ENABLED: true,
} as const;

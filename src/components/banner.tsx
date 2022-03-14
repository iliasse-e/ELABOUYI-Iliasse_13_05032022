import React from "react"

/**
 * Builds Banner component
 * Called in ** component/page
 * @returns banner hero content
 */
export const Banner = ():JSX.Element => {
    return <div className="hero">
    <section className="hero-content">
      <h2 className="sr-only">Promoted Content</h2>
      <p className="subtitle">No fees.</p>
      <p className="subtitle">No minimum deposit.</p>
      <p className="subtitle">High interest rates.</p>
      <p className="text">Open a savings account with Argent Bank today!</p>
    </section>
  </div>
}
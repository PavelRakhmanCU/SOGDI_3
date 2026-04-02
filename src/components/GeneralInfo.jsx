import React from "react";

function GeneralInfo() {
  return (
    <section className="general-info" aria-labelledby="general-info-title">
      <h2 id="general-info-title" className="visually-hidden">
        About booking and studio policies
      </h2>
      <div className="general-info-container">
        <div className="general-info-text-content">
          <div className="general-info-text-box">
            <h3 className="general-info-heading">Welcome</h3>
            <div className="general-info-text">
              <p>
                I&apos;m Sogdiana, a tattoo artist from Central Asia,
                specializing in realistic and micro-realistic tattoos in color and
                black &amp; grey. My work focuses on precision, fine detail, and
                timeless artistry.
              </p>
            </div>
          </div>

          <div className="general-info-text-box">
            <h3 className="general-info-heading">Booking information</h3>
            <div className="general-info-text">
              <p>Before booking, please read the following terms carefully.</p>
              <p>
                When submitting a request, describe your tattoo idea in detail and
                include all reference images you like. At the first session,
                we&apos;ll discuss and finalize your design together. Designs are not
                prepared in advance — this creative process usually takes 1–2 hours
                and is included in the session time.
              </p>
              <p>
                For large projects, I can arrange a video consultation beforehand to
                discuss design details.
              </p>
            </div>
          </div>

          <div className="general-info-text-box">
            <h3 className="general-info-heading">Project duration</h3>
            <div className="general-info-text">
              <ul>
                <li>
                  <strong>Full sleeves / back pieces:</strong> usually 9–12 sessions
                </li>
                <li>
                  <strong>Leg sleeves:</strong> usually 14–20 sessions
                </li>
              </ul>
              <p>
                The exact number depends on skin type, size, and design detail, as
                each client is unique.
              </p>
              <p>
                As this is an artistic project, there is no way to guarantee the
                exact amount of time.
              </p>
            </div>
          </div>

          <div className="general-info-text-box">
            <h3 className="general-info-heading">Session details</h3>
            <div className="general-info-text">
              <ul>
                <li>
                  <strong>Working hours:</strong> 12:00 PM – 7:30 PM
                </li>
                <li>Includes one lunch break and one coffee break</li>
                <li>
                  If you&apos;re late, the session will still end at 7:30 PM and will
                  be charged in full.
                </li>
              </ul>
            </div>
          </div>

          <div className="general-info-text-box">
            <h3 className="general-info-heading">Please</h3>
            <div className="general-info-text">
              <ul>
                <li>Avoid alcohol for several days before your appointment</li>
                <li>Rest well and eat beforehand to maintain energy</li>
                <li>
                  Bring your own lunch or snacks — a fridge and microwave are
                  available
                </li>
              </ul>
            </div>
          </div>

          <div className="general-info-text-box">
            <h3 className="general-info-heading">Payment and deposits</h3>
            <div className="general-info-text">
              <ul>
                <li>
                  <strong>Full-day session:</strong> $2,200
                </li>
                <li>
                  <strong>Hourly rate:</strong> $300/hour (for smaller or time-based
                  projects)
                </li>
                <li>Payment is due immediately after each session</li>
              </ul>
              <p>
                A $500 non-refundable deposit is required to confirm your booking.
                It can be paid in cash, via Zelle, or Venmo. The deposit secures your
                dates and will be applied to your final session (or your single
                session, if applicable).
              </p>
            </div>
          </div>

          <div className="general-info-text-box">
            <h3 className="general-info-heading">Rescheduling policy</h3>
            <div className="general-info-text">
              <p>
                If you need to reschedule, please notify me at least 7 days in
                advance. Changes made later will require a new deposit. You may
                reschedule once without losing your deposit.
              </p>
              <p>
                If you are over 30 minutes late without notice, the session will be
                canceled without refund.
              </p>
              <p>
                No-shows result in the loss of your deposit, and we will not be able
                to continue working together.
              </p>
            </div>
          </div>

          <div className="general-info-text-box">
            <h3 className="general-info-heading">Health notice</h3>
            <div className="general-info-text">
              <p>
                Please inform me in advance of any health conditions, allergies, or
                contraindications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralInfo;

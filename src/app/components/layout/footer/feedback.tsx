import MaterialInput from "@/app/mui/materialInput"

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback-card">
          <h1 className="feedback-title">Feedback</h1>
          <p className="feedback-subtitle">
            Seeking personalized support? <span className="feedback-span">Request a call from our team</span>
          </p>
          <MaterialInput />
          <div className="feedback-items">
            <button className="feedback-btn">Send Request</button>
            <span className="feedback-privacy">Privacy</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
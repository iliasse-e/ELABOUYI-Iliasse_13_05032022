import chat from "../assets/img/icon-chat.png";
import money from "../assets/img/icon-money.png";
import security from "../assets/img/icon-security.png"

interface FeaturePropType {
  money?: string,
  chat?: string,
  security?: string
}

const defaultProps = {
  chat: chat, 
  money: money, 
  security: security
}

/**
 * Builds the feature component
 * @returns feature static section
 */
const Feature: React.FC<FeaturePropType> = ({chat, money, security}): JSX.Element => {

    return <section className="features">
    <h2 className="sr-only">Features</h2>
    <div className="feature-item">
      <img src={chat} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">You are our #1 priority</h3>
      <p>
        Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes.
      </p>
    </div>
    <div className="feature-item">
      <img
        src={money}
        alt="Chat Icon"
        className="feature-icon"
      />
      <h3 className="feature-item-title">More savings means higher rates</h3>
      <p>
        The more you save with us, the higher your interest rate will be!
      </p>
    </div>
    <div className="feature-item">
      <img
        src={security}
        alt="Chat Icon"
        className="feature-icon"
      />
      <h3 className="feature-item-title">Security you can trust</h3>
      <p>
        We use top of the line encryption to make sure your data and money
        is always safe.
      </p>
    </div>
  </section>
}

Feature.defaultProps = defaultProps

export default Feature
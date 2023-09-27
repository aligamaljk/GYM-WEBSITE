
import "./Plans.css";
import whitTick from "../../assets/whiteTick.png";
import  {plansData}  from "../../data/plansData";
import RightArrow from "../../assets/rightArrow.png";
const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now withus</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData?.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan?.features?.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whitTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See More Benefits {RightArrow} </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

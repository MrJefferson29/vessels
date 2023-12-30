import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Terms.css";

const FAQ = () => {
  return (
    <Styles>
      <div className="terms-container">
        <div className="privacy-policy-container">
          <h2 className="privacy-heading">FAQ</h2>

          <p className="privacy-paragraph">
            Welcome to K & Q Courier Service's Privacy Policy. This policy
            outlines how we collect, use, and protect your personal information.
          </p>

          <h2>Definitions</h2>
          <p>
            <b>Service:</b> Refers to the pet transportation services provided
            by Willy's Pet Courier Service.
          </p>
          <p>
            <b>Client:</b> Refers to the pet owner or person requesting our
            services.
          </p>
          <p>
            <b>Package:</b> Refers to the goods being transported by our
            service.
          </p>

          <h3 className="privacy-subheading">
            Q1.What's included in market price?
          </h3>
          <p className="privacy-paragraph">
            Market price includes the VESSEL house and appliances (lights, air
            conditioner, and water heater). Market price does NOT include:
            Delivery/transportation to your location or crane services to remove
            the VESSEL from truck and put in place. This can be quoted and added
            to your invoice or you can obtain transportation services on your
            own. Other costs to consider: Foundation – concrete slabs or
            footings/piers. The VESSEL house includes the places on the feet to
            be tied down to a foundation. Connection of services – (electricity,
            sewer or septic, and water) We recommend either electrician and
            plumber or general contractor to connect these services.
          </p>

          <h3 className="privacy-subheading">
            Q2.How long does it take to get my VESSEL house?
          </h3>
          <p className="privacy-paragraph">
            The standard lead time is typically 60 days, starting from the date
            of receiving the deposit and all signed documents. However, many
            factors can affect lead time, including the time of year, the model
            chosen, number of units ordered, any custom upgrades, the local
            permitting process, required engineered drawings, and the distance
            from the VESSEL house manufacturing. We know that customers are
            excited to get their VESSEL house(s), and we’ll work hard to get
            your house built, delivered, and installed correctly and in a timely
            manner. Extreme circumstances, such as the Covid-19 pandemic or
            natural disasters can increase lead times. Consult VESSEL house
            contact for lead times on your potential project.
          </p>

          <h3 className="privacy-subheading">
            Q3.What preparations are required for land and delivery?
          </h3>
          <p className="privacy-paragraph">
            Determine Location: Just like any new construction, you would need
            to determine the location you want to put the VESSEL house. A survey
            of your land may need to be done to determine best locations.
          </p>

          <p className="privacy-paragraph">
            Preparing a Foundation: We recommend you prepare a foundation and
            bring utilities to it so they can plug in once the VESSEL house
            arrives. The type of foundation will be based upon the terrain and
            ground that you are placing the VESSEL House on. This is best
            determined by a general contractor or civil engineer. (Someone who
            is familiar with the land conditions of your location)
          </p>

          <h3 className="privacy-subheading">
            Preparing for delivery of your Vessel house:
          </h3>
          <p className="privacy-paragraph">
            The building will be delivered into place via a heavy-duty truck and
            long, tilt-bed trailer as well as a crane. The truck and trailer
            must have a clear 3m wide, relatively straight path from a paved
            road, as trailers are unable to make tight turns, similar to a boat
            trailer or camper. It is vitally important that there are no
            obstacles that cannot be navigated around, such as fences, trees,
            branches, or underground septic systems
          </p>

          <h3 className="privacy-subheading">Installing Utilities:</h3>
          <p className="privacy-paragraph">
            Plumbing, electricity, and AC all come pre-installed in your VESSEL
            house from the factory. Utilities simply plugin on-site to the
            exterior of the VESSEL house. We recommend you have a professional
            contractor on site to get everything installed correctly upon
            delivery of your VESSEL House.
          </p>

          <h3 className="privacy-subheading">
            Q4.How about the transportation?
          </h3>
          <p className="privacy-paragraph">
            <h3 className="privacy-subheading">Transportation:</h3> The VESSEL
            house(s) should be transported using a standard semi-trailer for
            local delivery. Additionally, for overseas shipment, it is
            transported in a 40-foot FLAT RACK container.
            <h3 className="privacy-subheading">Hoisting:</h3> Upon arrival at
            the project site, the VESSEL house should be lifted using the
            services of a local crane. The weight of the VESSEL house ranges
            between 6 to 10.5 tons. It is advisable to arrange for a crane with
            a capacity of more than 25 tons for loading and unloading.
          </p>
        </div>
        <Link to="/home">
          <button className="butt">Get Back Home</button>
        </Link>
      </div>
    </Styles>
  );
};

export default FAQ;

const Styles = styled.div`
  .butt {
    width: 270px;
    height: 75px;
    margin: 20px;
    background: sandybrown;
    font-size: 1rem;
    font-weight: 800;
    border: 1px solid white;
    box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
  }
`;

import React from "react";
import "./billing-form.scss";

function BillingForm({ isLoading, formRef, handleChange, handleUpdateBillingDetails }) {
    return (
        <div className="form-wrapper mt-14">
            {/* <div className="label">Billing Details</div> */}
            <form ref={formRef} className="billing-form" onSubmit={handleUpdateBillingDetails}>
                <input required type="text" name="fullname" placeholder="Full Name*" onChange={handleChange} />
                <input type="text" name="companyName" placeholder="Company Name (Optional)" onChange={handleChange} />
                <input required type="text" name="country" placeholder="Country / Region*" onChange={handleChange} />
                <input required type="text" name="address1" placeholder="Address*" onChange={handleChange} />
                <input type="text" name="address2" onChange={handleChange} />
                <input required type="text" name="city" placeholder="Town / City*" onChange={handleChange} />
                <input required type="text" name="state" placeholder="State*" onChange={handleChange} />
                <input required type="text" name="postcode" placeholder="Postcode / Zip*" onChange={handleChange} />
                <div className="form-row">
                    <input required type="number" name="phone" placeholder="Phone*" onChange={handleChange} />
                    <input required type="email" name="email" placeholder="Email*" onChange={handleChange} />
                </div>
                <textarea rows="4" name="notes" placeholder="Order Notes" onChange={handleChange} />
                <button disabled={isLoading} type="submit" className="submit-btn my-12 min-[1600px]:my-24">
                    Next
                </button>
            </form>
        </div>
    );
}

export default BillingForm;

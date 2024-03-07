import "./InternalRegistrationCard.css";

function InternalRegistrationPage() {
  return (
    <div className="flex-container-column internal-registartion-page">
      <div className="flex-container-column internal-registration-header">
        <h1 className="flex-item internal-reg-main-header">
          Internal Individual registartion
        </h1>
        <h3 className="flex-item internal-reg-sub-header">
          Fill out the form below if you are a student of VIT Vellore, and want
          to participate in VITMUN'24.
        </h3>
      </div>
      <div className="flex-container-column internal-registration-form-card">
        <div className="flex-container-column basic-info-section">
          <div className="flex-container-row two-input-fields">
            <div className="flex-item flex-container-column input-field-container">
              <label className="input-label">Participant Name</label>
              <input type="text" className="input-field" placeholder="Name" />
            </div>
            <div className="flex-item flex-container-column input-field-container">
              <label className="input-label">Registration Number</label>
              <input
                type="text"
                className="input-field"
                placeholder="2XBXX1234"
              />
            </div>
          </div>
          <div className="flex-container-row two-input-fields">
            <div className="flex-item flex-container-column input-field-container">
              <label className="input-label">Contact Number</label>
              <input
                type="text"
                className="input-field"
                placeholder="Whatsapp Number"
              />
            </div>
            <div className="flex-item flex-container-column input-field-container">
              <label className="input-label">Email-ID</label>
              <input type="text" className="input-field" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="flex-container-row card-section-header-container">
          <h3 className="flex-item card-section-header">Delegate Preference</h3>
          <h4 className="flex-item country-matrix">COUNTRY MATRIX</h4>
        </div>
        <div className="flex-container-column delegate-preference-section">
          <input
            type="text"
            className="input-field preference-input"
            placeholder="Commitee Preference 1"
          />
          <div className="flex-container-row three-input-fields">
            <input
              type="text"
              className="input-field preference-input"
              placeholder="Preference 1"
            />
            <input
              type="text"
              className="input-field preference-input"
              placeholder="Preference 2"
            />
            <input
              type="text"
              className="input-field preference-input"
              placeholder="Preference 3"
            />
          </div>
          <h3 className="flex-item preference-instruction">
            *Refer to the Country Matrix given above
          </h3>
        </div>
        <div className="flex-container-column delegate-preference-section">
          <input
            type="text"
            className="input-field preference-input"
            placeholder="Commitee Preference 1"
          />
          <div className="flex-container-row three-input-fields">
            <input
              type="text"
              className="input-field preference-input"
              placeholder="Preference 1"
            />
            <input
              type="text"
              className="input-field preference-input"
              placeholder="Preference 2"
            />
            <input
              type="text"
              className="input-field preference-input"
              placeholder="Preference 3"
            />
          </div>
          <h3 className="flex-item preference-instruction">
            *Refer to the Country Matrix given above
          </h3>
        </div>
        <div className="flex-container-column delegate-preference-section">
          <input
            type="text"
            className="input-field preference-input"
            placeholder="Commitee Preference 1"
          />
          <div className="flex-container-row three-input-fields">
            <input
              type="text"
              className="input-field preference-input"
              placeholder="Preference 1"
            />
            <input
              type="text"
              className="input-field preference-input"
              placeholder="Preference 2"
            />
            <input
              type="text"
              className="input-field preference-input"
              placeholder="Preference 3"
            />
          </div>
          <h3 className="flex-item preference-instruction">
            *Refer to the Country Matrix given above
          </h3>
        </div>
        <div className="flex-container-row card-section-header-container">
          <h3 className="flex-item card-section-header">Delegate Experience</h3>
        </div>
        <div className="flex-container-column delegate-experience-container">
          <input
            className="delegate-experience-number input-field flex-item"
            type="text"
            placeholder="Number of MUNs as a Delegate"
          />
          <textarea className="input-field delegate-experience-content flex-item" />
        </div>
        <div className="flex-container-column delegate-experience-container">
          <input
            className="delegate-experience-number input-field flex-item"
            type="text"
            placeholder="Number of MUNs as a Delegate"
          />
          <textarea className="input-field delegate-experience-content flex-item" />
        </div>
        <button className="internal-registration-form-button">
          PRESENT, AND VOTING
        </button>
      </div>
    </div>
  );
}

export default InternalRegistrationPage;

import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    currentClass: "Select Class",
    boardingPref: "Full Boarding",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitTimerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(submitTimerRef.current), []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setFormStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.parentName ||
      !formData.studentName ||
      !formData.email ||
      formData.currentClass === "Select Class"
    ) {
      setFormStatus("Please complete the required fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    submitTimerRef.current = window.setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus(
        "Your enquiry has been recorded. The admissions office can follow up using the details provided.",
      );
    }, 500);
  };

  return (
    <section className="py-[80px] bg-background" id="apply">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">
              Admissions Office
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Our admissions team is here to guide you through every step.
              Please reach out with any questions or submit an enquiry below.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaLocationDot
                  className="mr-4 mt-1 shrink-0 text-secondary"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-label-caps text-label-caps text-primary mb-1">
                    Location
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Archdeacon Crowther Memorial Girls' School
                    <br />
                    Elelenwo, Port Harcourt
                    <br />
                    Rivers State, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope
                  className="mr-4 mt-1 shrink-0 text-secondary"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-label-caps text-label-caps text-primary mb-1">
                    Email
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Contact the school administration
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone
                  className="mr-4 mt-1 shrink-0 text-secondary"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-label-caps text-label-caps text-primary mb-1">
                    Phone
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Phone details available from the school administration
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 w-full h-64 rounded-lg overflow-hidden custom-shadow border border-surface-dim">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAczrzH7mZl-aUtzG8axBZW0Kyji4n8ev3gHLGSbH46r__IyY0djdLzZ_0PcA7Re5q6g0T2H75oYQPvhZGGC_qncyRK5H64Id8tVYNKLUJ1CQ84j_tn_kwRrH_z_PKMC9MPIBuDT9HUw_wlolfDMx9-xNjX_wyaJjAQT58ecF9spah9Rhr05jBmmBgDDHqNXt7Hl9mlm3s2RR3r8NNfT8-iRQTMktFf2h0i51iSl6DQo8iFgtL1xHM-Aw"
                alt="Port Harcourt Map"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl custom-shadow border-t-2 border-tertiary-fixed-dim">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-6">
              Make an Enquiry
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block font-label-caps text-label-caps text-primary mb-2"
                    htmlFor="parentName"
                  >
                    Parent/Guardian Name
                  </label>
                  <input
                    className="w-full bg-surface border-outline-variant rounded p-3 font-body-md text-body-md focus:ring-0 transition-colors"
                    id="parentName"
                    placeholder="Parent or guardian name"
                    type="text"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    className="block font-label-caps text-label-caps text-primary mb-2"
                    htmlFor="studentName"
                  >
                    Student Name
                  </label>
                  <input
                    className="w-full bg-surface border-outline-variant rounded p-3 font-body-md text-body-md focus:ring-0 transition-colors"
                    id="studentName"
                    placeholder="Mary Doe"
                    type="text"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block font-label-caps text-label-caps text-primary mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface border-outline-variant rounded p-3 font-body-md text-body-md focus:ring-0 transition-colors"
                    id="email"
                    placeholder="your@email.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    className="block font-label-caps text-label-caps text-primary mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-surface border-outline-variant rounded p-3 font-body-md text-body-md focus:ring-0 transition-colors"
                    id="phone"
                    placeholder="+234..."
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block font-label-caps text-label-caps text-primary mb-2"
                    htmlFor="currentClass"
                  >
                    Current Class
                  </label>
                  <select
                    className="w-full bg-surface border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface-variant focus:ring-0 transition-colors"
                    id="currentClass"
                    value={formData.currentClass}
                    onChange={handleChange}
                    required
                  >
                    <option>Select Class</option>
                    <option>JSS 1</option>
                    <option>JSS 2</option>
                    <option>SS 1</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block font-label-caps text-label-caps text-primary mb-2"
                    htmlFor="boardingPref"
                  >
                    Boarding Preference
                  </label>
                  <select
                    className="w-full bg-surface border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface-variant focus:ring-0 transition-colors"
                    id="boardingPref"
                    value={formData.boardingPref}
                    onChange={handleChange}
                  >
                    <option>Full Boarding</option>
                    <option>Day Student</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block font-label-caps text-label-caps text-primary mb-2"
                  htmlFor="message"
                >
                  Message / Questions
                </label>
                <textarea
                  className="w-full bg-surface border-outline-variant rounded p-3 font-body-md text-body-md focus:ring-0 transition-colors"
                  id="message"
                  placeholder="How can we help?"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                className="w-full bg-primary text-on-primary font-label-caps text-label-caps px-6 py-4 rounded border-2 border-tertiary-fixed-dim hover:bg-secondary transition-colors duration-300 gold-glow mt-4"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
              {formStatus && (
                <p className="text-sm text-on-surface-variant" role="status">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

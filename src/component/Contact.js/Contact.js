import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="min-vh-100 bg-theme" id="header">
        <div className="container-fluid">
          <div className="card bg-theme border-0 min-vh-100 mx-5">
            <div className="my-auto">
              <div className="row">
                <div className="col-11 col-md-8 col-lg-6 col-sm-11 card mx-auto bg-theme border-0">
                  <center>
                    <div className="text-center title">Contact</div>
                    <div className="mono-text text-light fs-5 mb-3 mt-5">
                      I’m currently looking for any new
                      opportunities, my inbox is always open.
                      <div className="mt-2">You can contact me on</div>
                    </div>
                    <a
                      className="text-danger t1 ms-3 me-2 fs-5"
                      href="mailto:jigneshbaria1777@gmail.com"
                      target="_blank"
                    >
                      <i alt="Mail logo" class="bi bi-envelope" />
                    </a>
                    <a
                      className="text-primary t1 ms-3 me-2 fs-5"
                      href="https://www.linkedin.com/in/jignesh-baria/"
                      target="_blank"
                    >
                      <i alt="Linkedin logo" class="bi bi-linkedin" />
                    </a>
                    <a
                      className="text-light t1 ms-3 me-2 fs-5"
                      href="https://github.com/Jignesh220"
                      target="_blank"
                    >
                      <i alt="GitHub logo" class="bi bi-github" />
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

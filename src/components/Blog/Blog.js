import React from 'react';

const Blog = () => {
    return (
      <div>
        <section className="dark:bg-gray-800 dark:text-gray-100 py-20">
          <div className="container flex flex-col justify-center px-4 py-8 min-h-[60vh] mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl my-5">
              Most Asked Interview Questions
            </h2>
            <p className="mt-4 mb-8 dark:text-gray-400">
              Here are some common interview question & answers for Assignment
              Bonus Marks.
            </p>
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is Cors?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Cross-Origin Resource Sharing CORS is an HTTP-based security
                  mechanism controlled and enforced by the client web browser.
                  It allows a service API to indicate any origin other than its
                  own from which the client can request resources. It has been
                  designed in response to the same-origin policy SOP that
                  restricts how a website HTML document or JS script loaded by
                  one origin can interact with a resource from another origin.
                  CORS is used to explicitly allow some cross-origin requests
                  while rejecting others.CORS is implemented primarily in web
                  browsers, but it can also be used in API clients as an option.{" "}
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Firebase is a less technical and time-saving alternative to
                  writing full-fledged backend code for dynamic apps.We might
                  also want to consider leveraging this tool if you eventually
                  wish to host and manage our app in the cloud. Being
                  serverless, Firebase removes the need to worry about the
                  technicalities of cloud server configuration.As a Google Cloud
                  service, it also gives we access to other Google products and
                  features, like Google Drive and Sheets. For instance, we can
                  import dummy data from Google Sheets and use it temporarily to
                  serve our app. <br />
                  Auth0, MongoDB, Passport, Okta, are aslo popular alternatives
                  and competitors to Firebase Authentication.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  How does the private route work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  The react private route component renders child components
                  (children) if the user is logged in. If not logged in the user
                  is redirected to the /login page with the return url passed in
                  the location state property.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is Node? How Does Node work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Node.js is a platform built on Chrome's JavaScript runtime for
                  easily building fast and scalable network applications.
                  Node.js uses an event-driven, non-blocking I/O model that
                  makes it lightweight and efficient, perfect for data-intensive
                  real-time applications that run across distributed devices.{" "}
                  <br />
                  Node.js accepts the request from the clients and sends the
                  response, while working with the request node.js handles them
                  with a single thread. To operate I/O operations or requests
                  node.js use the concept of threads. Thread is a sequence of
                  instructions that the server needs to perform. It runs
                  parallel on the server to provide the information to multiple
                  clients. Node.js is an event loop single-threaded language. It
                  can handle concurrent requests with a single thread without
                  blocking it for one request <br />
                  Node.js basically works on two concept{" "}
                  <ul>
                    <li>Asynchronous</li> <li>Non-blocking I/O</li>
                  </ul>
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Blog;
import React from "react";

export default function BigMessage() {
  return (
    <div>
      <div className="container text-slate-800 text-center mx-auto px-5 md:px-20 py-20  rounded ">
        <h1 className="text-2xl md:text-4xl mb-3">We put your ideas into action.</h1>
        <div className="comntainer mx-auto">
          <p className="py-3 text-xl md:text-2xl">
            Through consulting techniques, engineering processes, and
            technological tools, we create a paradigm shift in your company. We
            identify opportunities and capitalize on them with your entire team.
          </p>
          <p className="py-3 text-xl md:text-2xl">
            From your ideas, we design processes that are applicable and easy to
            internalize. These processes are focused on creating value for the
            client, and if we identify any waste during this period, we will
            eliminate it to achieve a successful Lean (robust) result.
          </p>
          <p className="py-3 text-xl md:text-2xl">
            Each service option includes strategy, implementation, and
            documentation for the client.
          </p>
        </div>
      </div>
    </div>
  );
}

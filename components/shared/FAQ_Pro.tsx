import FAQ_Component, { Semibold_Pink } from "./FAQ_Component";

const FAQ_Pro = () => {
  return (
    <div className="flex flex-col gap-3">
      <FAQ_Component
        variant="black"
        title="How Are Cloud Plans More Suitable for Agencies and Professionals?"
      >
        <p>
          Cloud plans are suitable for agencies and professionals because they
          are powerful, fast, and easy to use. Your agency can deploy many
          websites that run with 4x more speed and total control of servers
          resources. With maximum performance and a guarantee of uptime, you can
          enjoy the steady growth of your business and always have happy
          customers.
        </p>
        <p>
          Hostinger uses CloudLinux with LVE containers and dedicated IP
          addresses. In this setup, each user gets a container with resource
          boundaries to maintain smooth operation.
        </p>
        <p>
          This means that the resources you get are comparable to a virtual
          private server (VPS). But unlike VPS, you dont need technical
          expertise to set up and manage cloud hosting - it is as easy as using
          web hosting.
        </p>
        <p>
          Once your website needs more resources, you can upgrade from web
          hosting to cloud hosting directly via the Members Area with just a few
          clicks.
        </p>
      </FAQ_Component>
      <FAQ_Component variant="black" title="What Is Hostinger Pro Panel?">
        <p>
          Hostinger Pro Panel is a professional dashboard designed to serve as a
          one-stop destination for agencies and all web professionals, including
          developers, designers, and creators.
        </p>
        <p>
          With Pro Panel, you can easily manage all client accounts and their
          website configuration settings from one dashboard, including bulk
          updates for multiple WordPress websites. Save time and effort by
          updating themes, plugins, and core versions in one go.
        </p>
        <p>
          On top of it, you can earn up to 20% commissions for all your clients
          first-time and recurring plan purchases and manage them using
          Hostinger Pro Panel.
        </p>
        <p>
          Check out
          <Semibold_Pink>
            {" "}
            Hostinger Academy video on Pro Panel
          </Semibold_Pink>{" "}
          to get a clearer understanding of the dashboard.
        </p>
      </FAQ_Component>
      <FAQ_Component
        variant="black"
        title="Who Should Consider Joining Hostinger Partner Program?"
      >
        <p>
          Hostinger Partner program is tailored for agencies and freelancers
          offering website development and design services to their clients.
        </p>
        <p>
          This program is suitable for everyone who wants to help others
          establish their online presence.
        </p>
      </FAQ_Component>
      <FAQ_Component
        variant="black"
        title="How Much Does it Cost to Join the Partner Program?"
      >
        <p>
          Hostinger Partner program is free to join. Simply sign up to create
          your free account and begin adding clients.
        </p>
      </FAQ_Component>
      <FAQ_Component variant="black" title="How Can I Earn Commissions?">
        <p>
          You can earn commissions every time your reffered clients buy
          Hostingers hosting plans.
        </p>
        <p>
          Once your clients purchase web hosting or VPS plans for 12 months or
          longer, you will receive a payment equivalent to 20% of the plans
          price.
        </p>
        <p>
          If your referred client purchases another hosting service, upgrades,
          or renews their plan, you will receive a payment equivalent to 10% of
          the hosting plan price.
        </p>
      </FAQ_Component>
      <FAQ_Component
        variant="black"
        title="How Many Customers Can I Manage With Pro Panel?"
      >
        <p>
          The sky is the limit - add as many clients as you want to the Pro
          Panel. You will earn commissions for every plan purchase they make.
        </p>
      </FAQ_Component>
      <FAQ_Component
        variant="black"
        title="How Can I Get Access to My Clients Sites?"
      >
        <p>
          Once you add a client, they will need to verify your access request.
          Then, you will be able to manage their services and websites directly
          from your Pro Panel.
        </p>
        <p>
          This is a great solution when it comes to agencies that have many
          clients - no more switching between different hosting control panels
          and dashboards.
        </p>
      </FAQ_Component>
      <FAQ_Component
        variant="black"
        title="What Kind of Access Will My Clients Have?"
      >
        <p>
          By default, your clients will have full ownership and access to their
          own accounts and websites. That means you do not have to worry about
          separately sharing access with your clients.
        </p>
      </FAQ_Component>
      <FAQ_Component variant="black" title="What Kind of Support Can I Expect?">
        <p>
          Hostinger offers priority support with all cloud plans. Our Customer
          Success team has highly skilled professionals available 24/7 - we will
          get back to you in less than one minute.
        </p>
        <p>
          We are ready to answer questions about selecting hosting plans,
          setting up service, as well as technical topics related to WordPress,
          migrations, and backups.
        </p>
      </FAQ_Component>
    </div>
  );
};

export default FAQ_Pro;

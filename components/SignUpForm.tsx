
import React, { useEffect } from 'react';

const SignUpForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-[1200px] md:h-[1050px] bg-white rounded-[25px] shadow-2xl overflow-y-auto border border-slate-200">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/9vKhlad88DR6LG5fVYDF"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
        id="inline-9vKhlad88DR6LG5fVYDF" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Clinic Match Form"
        data-height="969"
        data-layout-iframe-id="inline-9vKhlad88DR6LG5fVYDF"
        data-form-id="9vKhlad88DR6LG5fVYDF"
        title="Clinic Match Form"
      />
    </div>
  );
};

export default SignUpForm;
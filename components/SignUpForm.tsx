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
    <div className="w-full h-[850px] md:h-[950px] bg-white rounded-[25px] shadow-2xl overflow-hidden border border-slate-200">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/727wKYU3y9em2RUx2yNn"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '25px' }}
        id="inline-727wKYU3y9em2RUx2yNn"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 19"
        data-height="950"
        data-layout-iframe-id="inline-727wKYU3y9em2RUx2yNn"
        data-form-id="727wKYU3y9em2RUx2yNn"
        title="Form 19"
      />
    </div>
  );
};

export default SignUpForm;
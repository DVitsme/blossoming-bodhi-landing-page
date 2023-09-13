'use client';

import React, { useEffect } from 'react';

const FlodeskSalesFunnel = () => {
  useEffect(() => {
    (function (w, d, t, h, s, n) {
      // @ts-ignore
      w.FlodeskObject = n;
      var fn = function () {
        // @ts-ignore
        (w[n].q = w[n].q || []).push(arguments);
      };
      // @ts-ignore
      w[n] = w[n] || fn;
      var f = d.getElementsByTagName(t)[0];
      var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
      var sm = d.createElement(t);
      // @ts-ignore
      sm.async = true;
      // @ts-ignore
      sm.type = 'module';
      // @ts-ignore
      sm.src = h + s + '.mjs' + v;
      // @ts-ignore
      f.parentNode.insertBefore(sm, f);
      var sn = d.createElement(t);
      // @ts-ignore
      sn.async = true;
      // @ts-ignore
      sn.noModule = true;
      // @ts-ignore
      sn.src = h + s + '.js' + v;
      // @ts-ignore
      f.parentNode.insertBefore(sn, f);
    })(
      window,
      document,
      'script',
      'https://assets.flodesk.com',
      '/universal',
      'fd'
    );

    // @ts-ignore
    window.fd('form', {
      formId: '64fa0758499f9e54b3a1a63d',
      containerEl: '#fd-form-64fa0758499f9e54b3a1a63d'
    });

    return () => {};
  }, []);

  return <div id="fd-form-64fa0758499f9e54b3a1a63d"></div>;
};

export default FlodeskSalesFunnel;

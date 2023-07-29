module.exports = {
    compiler: {
      styledComponents: {
        // Enable display of the component name along with the generated className (needed for debugging).
        displayName: true,
        // Enable SSR support
        ssr: true,
        // Optional
        fileName: false,
      },
    },
  }
  
  // babel.config.js
  
  module.exports = {
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          displayName: true,
          fileName: false,
          ssr: true,
        },
      ],
    ],
  };
import { PortableTextComponents } from '@portabletext/react';

export const components: PortableTextComponents = {
  block: {
    
    h3: ({ children }) => <h3 className="text-3xl font-bold text-blue-600 mt-6">{children}</h3>,
  },

  listItem: ({ children, value }) => {
   
    if (value.style === 'number') {
      return <li className="list-decimal marker:text-accentDarkSecondary list-inside ml-4">{children}</li>;
    }
    
    return <li className="list-disc marker:text-accentDarkSecondary list-inside ml-4">{children}</li>;
  },

};

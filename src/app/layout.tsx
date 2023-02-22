import type { PropsWithChildren } from 'react';

import { GlobalClientContainer } from '~/app/GlobalClientContainer';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang={'ko'}>
      <head />
      <body>
        <GlobalClientContainer>{children}</GlobalClientContainer>
      </body>
    </html>
  );
}

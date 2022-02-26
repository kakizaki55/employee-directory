import App from './App';
import { render, screen } from '@testing-library/react';
import { UserProvider } from './context/UserContext';
import { ProfileProvider } from './context/ProfileContext';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('testing the whole app', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <ProfileProvider>
          <App></App>
        </ProfileProvider>
      </UserProvider>
    </MemoryRouter>
  );
  const header = screen.getByText(/acme employee directory/i);
  const loginButton = screen.getByRole('button', {
    name: /login/i,
  });

  userEvent.click(loginButton);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  userEvent.type(emailInput, 'minoka.kakizaki@gmail.com');
  userEvent.type(passwordInput, '12345678');

  userEvent.click(
    screen.getByRole('button', {
      name: /sign in/i,
    })
  );
  screen.debug();
});

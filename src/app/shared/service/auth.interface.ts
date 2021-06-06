import { Observable } from 'rxjs';

import { User } from './../model/user.model';

export interface AuthInterface {
  loginUser$(): Observable<User>;
}

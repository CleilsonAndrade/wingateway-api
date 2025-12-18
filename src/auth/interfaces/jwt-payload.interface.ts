export interface JwtPayload {
  registration: string;
  name: string;
  roles: string[];
  status: 'ativo' | 'inativo';
}

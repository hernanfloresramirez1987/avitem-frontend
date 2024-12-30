export interface ClientRegister {
    u_username: string;
    u_password: string;
    u_rol: 'admin' | 'user' | 'guest';

    p_ci: string;
    p_ciExpedit: string;
    p_ciComplement: number;
    p_nombre: string;
    p_app: string;
    p_apm: string;
    p_sexo: 'M' | 'F';
    p_fnaci: string;
    p_direccion: string;
    p_telefono: string;
    p_email: string;

    e_idtipo: number;
    e_idcargo: number;
    e_fing: string;
    e_salario: number;
}

export interface RegistroPersonaClienteResult {
    p_resultado: string;
    p_status: number;
}
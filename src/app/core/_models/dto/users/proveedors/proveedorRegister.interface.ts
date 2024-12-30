export interface ProveedorRegister {
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

    pr_empresa: string;
    pr_nit: number;
    pr_telefonoEmpresa: string;
    pr_direccionEmpresa: string;
}

export interface RegistroPersonaProveedorResult {
    p_resultado: string;
    p_status: number;
}
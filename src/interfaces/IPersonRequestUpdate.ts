export type IPersonRequestUpdate = {
  id: string;
  tipo: 'legal' | 'natural';
  role: 'admin' | 'default';
  nomeEmpresa: string;
  documento: string;
  tipoDocumento?: 'cpf' | 'cnpj';
  nome: string;
  email: string;
  password: string;
  celular: string;
  avatarUrl: string;
  sexo: 'masculino' | 'feminino' | 'outros';
  dataNascimento: Date;
};

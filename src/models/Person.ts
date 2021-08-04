import { IPerson } from 'interfaces/IPerson';
import { IPersonRequest } from 'interfaces/IPersonRequest';
import { IPersonRequestUpdate } from 'interfaces/IPersonRequestUpdate';

abstract class Person implements IPerson {

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
  createdAt: Date;
  updatedAt: Date;
  addresses: any[];

  abstract create({
    tipo,
    role,
    nomeEmpresa,
    documento,
    tipoDocumento,
    nome,
    email,
    password,
    celular,
    avatarUrl,
    sexo,
    dataNascimento,
  }: IPersonRequest): void;
   
  abstract createWithId({
    id,
    role,
    nomeEmpresa,
    documento,
    tipoDocumento,
    nome,
    email,
    password,
    celular,
    avatarUrl,
    sexo,
    dataNascimento,
  }: IPersonRequestUpdate): void;

  abstract isValid(): Promise<{ isValidPerson: boolean; error: string; }>;
}

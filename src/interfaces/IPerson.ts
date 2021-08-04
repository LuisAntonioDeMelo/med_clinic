import { IPersonRequest } from "./IPersonRequest";
import { IPersonRequestUpdate } from "./IPersonRequestUpdate";

export interface IPerson {
    create({
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
        dataNascimento  
    }: IPersonRequest): void;

    createWithId({
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
        dataNascimento 
    }: IPersonRequestUpdate): void;

    isValid(): Promise<{ isValidPerson: boolean; error: string }>;

}
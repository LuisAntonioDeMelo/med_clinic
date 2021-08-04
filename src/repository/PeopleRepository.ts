import { Knex } from "knex";
import connection from '../database/connection';

interface IListRequest {
    page: number;
    pageLimit: number;
  }

class PessoaRepository {
    private readonly connection: Knex;

    // constructor() {
    //     this.connection = Knex(connection);
    // }

    // public async all({page: number, pageLimit: number}: IListRequest): Promise<Person[]> {
        
    // }
}
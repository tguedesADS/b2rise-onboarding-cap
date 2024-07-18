using {db} from '../db/books';


service BookManagement {

    entity Books as projection on db.Books order by publishedYear DESC, title ASC;    
    entity FilterBooks as select from db.Books where publishedYear > 2000;
    entity FilterOldBooks as select from db.Books where publishedYear < 1990;
}
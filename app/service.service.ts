import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  clist()
  {
    return this.http.get("http://localhost:8080/Quiz/course/clist");
  }
  slist(cid)
  {
    return this.http.get("http://localhost:8080/Quiz/subject/slist/"+cid);
  }
  tlist(sid)
  {
    return this.http.get("http://localhost:8080/Quiz/topic/tlist/"+sid);
  }
  qlist(tid,lid)
  {
    return this.http.get("http://localhost:8080/Quiz/ques/qlist/"+tid+"/"+lid);
  }
  adminlogin(admin)
  {
    return this.http.post("http://localhost:8080/Quiz/admin/login",admin);
  }
  quesInsert(value)
  {
    return this.http.post("http://localhost:8080/Quiz/admin/insert",value);
  }
  allQueslist()
  {
    return this.http.get("http://localhost:8080/Quiz/admin/qlist");
  }
  ques(qid)
  {
    return this.http.get("http://localhost:8080/Quiz/admin/ques",qid);
  }
  deleteques(qid)
  {
    return this.http.delete("http://localhost:8080/Quiz/admin/delete",qid);

  }
}

export class DataService{
  
    private data: string[] = [];
      
    getData(): string[] {
          
        return this.data;
    }
    addData(id: number){
          
        this.data.push(String(id));
    }
}
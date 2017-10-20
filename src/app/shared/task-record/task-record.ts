export class TaskRecord {
    constructor(public id: string = "",
                public order_id: string="",
                public date: string = "",
                public time_table_id: string="",
                public quantity: string="",
                public worker_id: string="",
                public team_id: string="",
                public created_at: string = "",
                public updated_at: string = "",
                public deleted_at: string = "") {

    }
}

export class Order {
    constructor(public id: string = "",
                public order_date: string = "",
                public delivery_date: string = "",
                public client_id: string = "",
                public bill_client_id: string = "",
                public product_number: string = "",
                public quantity: string = "",
                public daily_target_quantity: string = "",
                public unit_price: string = "",
                public total_price: string = "",
                public content_id: string = "",
                public is_team_task: string = "",
                public work_place: string = "",
                public start_date: string = "",
                public completed_date: string = "",
                public is_completed: string = "",
                public note: string = "",
                public created_at: string = "",
                public updated_at: string = "",
                public deleted_at: string = "",
                public editable: boolean = false) {
    }
}

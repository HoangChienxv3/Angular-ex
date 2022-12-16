
export interface UserListConfig {
    type?: string;
    filters: {
        id?: string,
        createdAt?: string,
        name?: string,
        avatar?: string,
        username?: string
    }
}
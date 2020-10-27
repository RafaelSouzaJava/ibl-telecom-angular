export class AppConstants {

    public static get baseServidor(): string {return "http://localhost:8080/"}

    public static get baseLogin(): string {return this.baseServidor + 'login'}

    public static get baseUrl(): string {return this.baseServidor + 'usuarios/'}

    public static get basePlanos(): string {return this.baseServidor + 'planos/'}

    public static get baseBairro(): string {return this.baseServidor + 'bairros/'}

    public static get basePost(): string {return this.baseServidor + 'posts/'}

    public static get baseCategoria(): string {return this.baseServidor + 'categorias/'}

    public static get baseCategoriaCombo(): string {return this.baseServidor + 'categoriacombos/'}

    public static get baseRecSenha(): string {return this.baseServidor + 'auth/forgot'}

    public static get baseCliente(): string {return this.baseServidor + 'clientes/'}

    public static get baseViabilidade(): string {return this.baseServidor + 'viabilidades'}

    public static get bucketBaseUrl(): string {return 'https://ibl-telecom.s3-sa-east-1.amazonaws.com'}
}

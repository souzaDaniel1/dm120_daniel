export default class Content {

    private temperatura: string = "0";
    private luminosidade: string = "0";
    private umidade: string = "0";   
    private corLed: string = "white";

    constructor(temperatura: string, luminosidade: string, umidade: string, corLed: string) {
        this.temperatura = temperatura
        this.luminosidade = luminosidade
        this.umidade = umidade
        this.corLed = corLed
    }

    /**
     * Getter $temperatura
     * @return {string }
     */
	public get $temperatura(): string  {
		return this.temperatura;
	}

    /**
     * Setter $temperatura
     * @param {string } value
     */
	public set $temperatura(value: string ) {
		this.temperatura = value;
	}
    
    /**
     * Getter $luminosidade
     * @return {string }
     */
	public get $luminosidade(): string  {
		return this.luminosidade;
	}

    /**
     * Setter $luminosidade
     * @param {string } value
     */
	public set $luminosidade(value: string ) {
		this.luminosidade = value;
	}

    /**
     * Getter $umidade
     * @return {string }
     */
	public get $umidade(): string  {
		return this.umidade;
	}

    /**
     * Setter $umidade
     * @param {string } value
     */
	public set $umidade(value: string ) {
		this.umidade = value;
	}

    /**
     * Getter $corLed
     * @return {string }
     */
	public get $corLed(): string  {
		return this.corLed;
	}

    /**
     * Setter $corLed
     * @param {string } value
     */
	public set $corLed(value: string ) {
		this.corLed = value;
	}
}​​
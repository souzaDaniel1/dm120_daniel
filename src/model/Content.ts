export default class Content {

    private temperatura: string = "0";
    private temperaturaMax: string = "0";
    private temperaturaMin: string = "0";
    private luminosidade: string = "0";
    private luminosidadeMax: string = "0";
    private luminosidadeMin: string = "0";
    private umidade: string = "0";   
    private umidadeMax: string = "0";   
    private umidadeMin: string = "0";   
    private corLed: string = "white";
    private buzzer: string = "white";

    constructor(temperatura: string, temperaturaMax: string, temperaturaMin: string, luminosidade: string, luminosidadeMax: string, luminosidadeMin: string, umidade: string, umidadeMax: string, umidadeMin: string, corLed: string, buzzer: string) {
        this.temperatura = temperatura
        this.temperaturaMax = temperaturaMax
        this.temperaturaMin = temperaturaMin
        this.luminosidade = luminosidade
        this.luminosidadeMax = luminosidadeMax
        this.luminosidadeMin = luminosidadeMin
        this.umidade = umidade
        this.umidadeMax = umidadeMax
        this.umidadeMin = umidadeMin
        this.corLed = corLed
        this.buzzer = buzzer
    }

    /**
     * Getter $temperaturaMax
     * @return {string }
     */
	public get $temperaturaMax(): string  {
		return this.temperaturaMax;
	}

    /**
     * Getter $temperaturaMin
     * @return {string }
     */
	public get $temperaturaMin(): string  {
		return this.temperaturaMin;
	}

    /**
     * Setter $temperaturaMax
     * @param {string } value
     */
	public set $temperaturaMax(value: string ) {
		this.temperaturaMax = value;
	}

    /**
     * Setter $temperaturaMin
     * @param {string } value
     */
	public set $temperaturaMin(value: string ) {
		this.temperaturaMin = value;
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
    
    /**
     * Getter $luminosidadeMax
     * @return {string }
     */
	public get $luminosidadeMax(): string  {
		return this.luminosidadeMax;
	}

    /**
     * Getter $luminosidadeMin
     * @return {string }
     */
	public get $luminosidadeMin(): string  {
		return this.luminosidadeMin;
	}

    /**
     * Getter $umidadeMax
     * @return {string }
     */
	public get $umidadeMax(): string  {
		return this.umidadeMax;
	}

    /**
     * Getter $umidadeMin
     * @return {string }
     */
	public get $umidadeMin(): string  {
		return this.umidadeMin;
	}

    /**
     * Setter $luminosidadeMax
     * @param {string } value
     */
	public set $luminosidadeMax(value: string ) {
		this.luminosidadeMax = value;
	}

    /**
     * Setter $luminosidadeMin
     * @param {string } value
     */
	public set $luminosidadeMin(value: string ) {
		this.luminosidadeMin = value;
	}

    /**
     * Setter $umidadeMax
     * @param {string } value
     */
	public set $umidadeMax(value: string ) {
		this.umidadeMax = value;
	}

    /**
     * Setter $umidadeMin
     * @param {string } value
     */
	public set $umidadeMin(value: string ) {
		this.umidadeMin = value;
	}
}​​
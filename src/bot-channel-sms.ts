// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelSmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#bot_name BotChannelSms#bot_name}
  */
  readonly botName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#location BotChannelSms#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#phone_number BotChannelSms#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#resource_group_name BotChannelSms#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#sms_channel_account_security_id BotChannelSms#sms_channel_account_security_id}
  */
  readonly smsChannelAccountSecurityId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#sms_channel_auth_token BotChannelSms#sms_channel_auth_token}
  */
  readonly smsChannelAuthToken: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#timeouts BotChannelSms#timeouts}
  */
  readonly timeouts?: BotChannelSmsTimeouts;
}
export interface BotChannelSmsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#create BotChannelSms#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#delete BotChannelSms#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#read BotChannelSms#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html#update BotChannelSms#update}
  */
  readonly update?: string;
}

function botChannelSmsTimeoutsToTerraform(struct?: BotChannelSmsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html azurerm_bot_channel_sms}
*/
export class BotChannelSms extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_bot_channel_sms";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_sms.html azurerm_bot_channel_sms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotChannelSmsConfig
  */
  public constructor(scope: Construct, id: string, config: BotChannelSmsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_sms',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._botName = config.botName;
    this._location = config.location;
    this._phoneNumber = config.phoneNumber;
    this._resourceGroupName = config.resourceGroupName;
    this._smsChannelAccountSecurityId = config.smsChannelAccountSecurityId;
    this._smsChannelAuthToken = config.smsChannelAuthToken;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_name - computed: false, optional: false, required: true
  private _botName: string;
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber: string;
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // sms_channel_account_security_id - computed: false, optional: false, required: true
  private _smsChannelAccountSecurityId: string;
  public get smsChannelAccountSecurityId() {
    return this.getStringAttribute('sms_channel_account_security_id');
  }
  public set smsChannelAccountSecurityId(value: string) {
    this._smsChannelAccountSecurityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsChannelAccountSecurityIdInput() {
    return this._smsChannelAccountSecurityId
  }

  // sms_channel_auth_token - computed: false, optional: false, required: true
  private _smsChannelAuthToken: string;
  public get smsChannelAuthToken() {
    return this.getStringAttribute('sms_channel_auth_token');
  }
  public set smsChannelAuthToken(value: string) {
    this._smsChannelAuthToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsChannelAuthTokenInput() {
    return this._smsChannelAuthToken
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotChannelSmsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BotChannelSmsTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_name: cdktf.stringToTerraform(this._botName),
      location: cdktf.stringToTerraform(this._location),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sms_channel_account_security_id: cdktf.stringToTerraform(this._smsChannelAccountSecurityId),
      sms_channel_auth_token: cdktf.stringToTerraform(this._smsChannelAuthToken),
      timeouts: botChannelSmsTimeoutsToTerraform(this._timeouts),
    };
  }
}

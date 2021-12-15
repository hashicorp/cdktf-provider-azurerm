// https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelsRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#cmk_key_vault_url BotChannelsRegistration#cmk_key_vault_url}
  */
  readonly cmkKeyVaultUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#description BotChannelsRegistration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#developer_app_insights_api_key BotChannelsRegistration#developer_app_insights_api_key}
  */
  readonly developerAppInsightsApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#developer_app_insights_application_id BotChannelsRegistration#developer_app_insights_application_id}
  */
  readonly developerAppInsightsApplicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#developer_app_insights_key BotChannelsRegistration#developer_app_insights_key}
  */
  readonly developerAppInsightsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#display_name BotChannelsRegistration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#endpoint BotChannelsRegistration#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#icon_url BotChannelsRegistration#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#isolated_network_enabled BotChannelsRegistration#isolated_network_enabled}
  */
  readonly isolatedNetworkEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#location BotChannelsRegistration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#microsoft_app_id BotChannelsRegistration#microsoft_app_id}
  */
  readonly microsoftAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#name BotChannelsRegistration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#resource_group_name BotChannelsRegistration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#sku BotChannelsRegistration#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#tags BotChannelsRegistration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#timeouts BotChannelsRegistration#timeouts}
  */
  readonly timeouts?: BotChannelsRegistrationTimeouts;
}
export interface BotChannelsRegistrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#create BotChannelsRegistration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#delete BotChannelsRegistration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#read BotChannelsRegistration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html#update BotChannelsRegistration#update}
  */
  readonly update?: string;
}

export function botChannelsRegistrationTimeoutsToTerraform(struct?: BotChannelsRegistrationTimeoutsOutputReference | BotChannelsRegistrationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class BotChannelsRegistrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BotChannelsRegistrationTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotChannelsRegistrationTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html azurerm_bot_channels_registration}
*/
export class BotChannelsRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_bot_channels_registration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channels_registration.html azurerm_bot_channels_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotChannelsRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: BotChannelsRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channels_registration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cmkKeyVaultUrl = config.cmkKeyVaultUrl;
    this._description = config.description;
    this._developerAppInsightsApiKey = config.developerAppInsightsApiKey;
    this._developerAppInsightsApplicationId = config.developerAppInsightsApplicationId;
    this._developerAppInsightsKey = config.developerAppInsightsKey;
    this._displayName = config.displayName;
    this._endpoint = config.endpoint;
    this._iconUrl = config.iconUrl;
    this._isolatedNetworkEnabled = config.isolatedNetworkEnabled;
    this._location = config.location;
    this._microsoftAppId = config.microsoftAppId;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cmk_key_vault_url - computed: false, optional: true, required: false
  private _cmkKeyVaultUrl?: string; 
  public get cmkKeyVaultUrl() {
    return this.getStringAttribute('cmk_key_vault_url');
  }
  public set cmkKeyVaultUrl(value: string) {
    this._cmkKeyVaultUrl = value;
  }
  public resetCmkKeyVaultUrl() {
    this._cmkKeyVaultUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkKeyVaultUrlInput() {
    return this._cmkKeyVaultUrl;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // developer_app_insights_api_key - computed: true, optional: true, required: false
  private _developerAppInsightsApiKey?: string; 
  public get developerAppInsightsApiKey() {
    return this.getStringAttribute('developer_app_insights_api_key');
  }
  public set developerAppInsightsApiKey(value: string) {
    this._developerAppInsightsApiKey = value;
  }
  public resetDeveloperAppInsightsApiKey() {
    this._developerAppInsightsApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppInsightsApiKeyInput() {
    return this._developerAppInsightsApiKey;
  }

  // developer_app_insights_application_id - computed: true, optional: true, required: false
  private _developerAppInsightsApplicationId?: string; 
  public get developerAppInsightsApplicationId() {
    return this.getStringAttribute('developer_app_insights_application_id');
  }
  public set developerAppInsightsApplicationId(value: string) {
    this._developerAppInsightsApplicationId = value;
  }
  public resetDeveloperAppInsightsApplicationId() {
    this._developerAppInsightsApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppInsightsApplicationIdInput() {
    return this._developerAppInsightsApplicationId;
  }

  // developer_app_insights_key - computed: true, optional: true, required: false
  private _developerAppInsightsKey?: string; 
  public get developerAppInsightsKey() {
    return this.getStringAttribute('developer_app_insights_key');
  }
  public set developerAppInsightsKey(value: string) {
    this._developerAppInsightsKey = value;
  }
  public resetDeveloperAppInsightsKey() {
    this._developerAppInsightsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppInsightsKeyInput() {
    return this._developerAppInsightsKey;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // icon_url - computed: true, optional: true, required: false
  private _iconUrl?: string; 
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
  public set iconUrl(value: string) {
    this._iconUrl = value;
  }
  public resetIconUrl() {
    this._iconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUrlInput() {
    return this._iconUrl;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // isolated_network_enabled - computed: false, optional: true, required: false
  private _isolatedNetworkEnabled?: boolean | cdktf.IResolvable; 
  public get isolatedNetworkEnabled() {
    return this.getBooleanAttribute('isolated_network_enabled') as any;
  }
  public set isolatedNetworkEnabled(value: boolean | cdktf.IResolvable) {
    this._isolatedNetworkEnabled = value;
  }
  public resetIsolatedNetworkEnabled() {
    this._isolatedNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedNetworkEnabledInput() {
    return this._isolatedNetworkEnabled;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // microsoft_app_id - computed: false, optional: false, required: true
  private _microsoftAppId?: string; 
  public get microsoftAppId() {
    return this.getStringAttribute('microsoft_app_id');
  }
  public set microsoftAppId(value: string) {
    this._microsoftAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftAppIdInput() {
    return this._microsoftAppId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BotChannelsRegistrationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BotChannelsRegistrationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cmk_key_vault_url: cdktf.stringToTerraform(this._cmkKeyVaultUrl),
      description: cdktf.stringToTerraform(this._description),
      developer_app_insights_api_key: cdktf.stringToTerraform(this._developerAppInsightsApiKey),
      developer_app_insights_application_id: cdktf.stringToTerraform(this._developerAppInsightsApplicationId),
      developer_app_insights_key: cdktf.stringToTerraform(this._developerAppInsightsKey),
      display_name: cdktf.stringToTerraform(this._displayName),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      icon_url: cdktf.stringToTerraform(this._iconUrl),
      isolated_network_enabled: cdktf.booleanToTerraform(this._isolatedNetworkEnabled),
      location: cdktf.stringToTerraform(this._location),
      microsoft_app_id: cdktf.stringToTerraform(this._microsoftAppId),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: botChannelsRegistrationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

// https://www.terraform.io/docs/providers/azurerm/r/shared_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#description SharedImage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#eula SharedImage#eula}
  */
  readonly eula?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#gallery_name SharedImage#gallery_name}
  */
  readonly galleryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#hyper_v_generation SharedImage#hyper_v_generation}
  */
  readonly hyperVGeneration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#location SharedImage#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#name SharedImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#os_type SharedImage#os_type}
  */
  readonly osType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#privacy_statement_uri SharedImage#privacy_statement_uri}
  */
  readonly privacyStatementUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#release_note_uri SharedImage#release_note_uri}
  */
  readonly releaseNoteUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#resource_group_name SharedImage#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#specialized SharedImage#specialized}
  */
  readonly specialized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#tags SharedImage#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#trusted_launch_enabled SharedImage#trusted_launch_enabled}
  */
  readonly trustedLaunchEnabled?: boolean | cdktf.IResolvable;
  /**
  * identifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#identifier SharedImage#identifier}
  */
  readonly identifier: SharedImageIdentifier;
  /**
  * purchase_plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#purchase_plan SharedImage#purchase_plan}
  */
  readonly purchasePlan?: SharedImagePurchasePlan;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#timeouts SharedImage#timeouts}
  */
  readonly timeouts?: SharedImageTimeouts;
}
export interface SharedImageIdentifier {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#offer SharedImage#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#publisher SharedImage#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#sku SharedImage#sku}
  */
  readonly sku: string;
}

export function sharedImageIdentifierToTerraform(struct?: SharedImageIdentifierOutputReference | SharedImageIdentifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
  }
}

export class SharedImageIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SharedImageIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
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
}
export interface SharedImagePurchasePlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#name SharedImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#product SharedImage#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#publisher SharedImage#publisher}
  */
  readonly publisher?: string;
}

export function sharedImagePurchasePlanToTerraform(struct?: SharedImagePurchasePlanOutputReference | SharedImagePurchasePlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export class SharedImagePurchasePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SharedImagePurchasePlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImagePurchasePlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._product = undefined;
      this._publisher = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._product = value.product;
      this._publisher = value.publisher;
    }
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

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  public resetPublisher() {
    this._publisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }
}
export interface SharedImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#create SharedImage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#delete SharedImage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#read SharedImage#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html#update SharedImage#update}
  */
  readonly update?: string;
}

export function sharedImageTimeoutsToTerraform(struct?: SharedImageTimeoutsOutputReference | SharedImageTimeouts): any {
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

export class SharedImageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SharedImageTimeouts | undefined {
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

  public set internalValue(value: SharedImageTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html azurerm_shared_image}
*/
export class SharedImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_shared_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image.html azurerm_shared_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedImageConfig
  */
  public constructor(scope: Construct, id: string, config: SharedImageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_shared_image',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._eula = config.eula;
    this._galleryName = config.galleryName;
    this._hyperVGeneration = config.hyperVGeneration;
    this._location = config.location;
    this._name = config.name;
    this._osType = config.osType;
    this._privacyStatementUri = config.privacyStatementUri;
    this._releaseNoteUri = config.releaseNoteUri;
    this._resourceGroupName = config.resourceGroupName;
    this._specialized = config.specialized;
    this._tags = config.tags;
    this._trustedLaunchEnabled = config.trustedLaunchEnabled;
    this._identifier.internalValue = config.identifier;
    this._purchasePlan.internalValue = config.purchasePlan;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // eula - computed: false, optional: true, required: false
  private _eula?: string; 
  public get eula() {
    return this.getStringAttribute('eula');
  }
  public set eula(value: string) {
    this._eula = value;
  }
  public resetEula() {
    this._eula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eulaInput() {
    return this._eula;
  }

  // gallery_name - computed: false, optional: false, required: true
  private _galleryName?: string; 
  public get galleryName() {
    return this.getStringAttribute('gallery_name');
  }
  public set galleryName(value: string) {
    this._galleryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryNameInput() {
    return this._galleryName;
  }

  // hyper_v_generation - computed: false, optional: true, required: false
  private _hyperVGeneration?: string; 
  public get hyperVGeneration() {
    return this.getStringAttribute('hyper_v_generation');
  }
  public set hyperVGeneration(value: string) {
    this._hyperVGeneration = value;
  }
  public resetHyperVGeneration() {
    this._hyperVGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperVGenerationInput() {
    return this._hyperVGeneration;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // os_type - computed: false, optional: false, required: true
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // privacy_statement_uri - computed: false, optional: true, required: false
  private _privacyStatementUri?: string; 
  public get privacyStatementUri() {
    return this.getStringAttribute('privacy_statement_uri');
  }
  public set privacyStatementUri(value: string) {
    this._privacyStatementUri = value;
  }
  public resetPrivacyStatementUri() {
    this._privacyStatementUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyStatementUriInput() {
    return this._privacyStatementUri;
  }

  // release_note_uri - computed: false, optional: true, required: false
  private _releaseNoteUri?: string; 
  public get releaseNoteUri() {
    return this.getStringAttribute('release_note_uri');
  }
  public set releaseNoteUri(value: string) {
    this._releaseNoteUri = value;
  }
  public resetReleaseNoteUri() {
    this._releaseNoteUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNoteUriInput() {
    return this._releaseNoteUri;
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

  // specialized - computed: false, optional: true, required: false
  private _specialized?: boolean | cdktf.IResolvable; 
  public get specialized() {
    return this.getBooleanAttribute('specialized') as any;
  }
  public set specialized(value: boolean | cdktf.IResolvable) {
    this._specialized = value;
  }
  public resetSpecialized() {
    this._specialized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specializedInput() {
    return this._specialized;
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

  // trusted_launch_enabled - computed: false, optional: true, required: false
  private _trustedLaunchEnabled?: boolean | cdktf.IResolvable; 
  public get trustedLaunchEnabled() {
    return this.getBooleanAttribute('trusted_launch_enabled') as any;
  }
  public set trustedLaunchEnabled(value: boolean | cdktf.IResolvable) {
    this._trustedLaunchEnabled = value;
  }
  public resetTrustedLaunchEnabled() {
    this._trustedLaunchEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedLaunchEnabledInput() {
    return this._trustedLaunchEnabled;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier = new SharedImageIdentifierOutputReference(this as any, "identifier", true);
  public get identifier() {
    return this._identifier;
  }
  public putIdentifier(value: SharedImageIdentifier) {
    this._identifier.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier.internalValue;
  }

  // purchase_plan - computed: false, optional: true, required: false
  private _purchasePlan = new SharedImagePurchasePlanOutputReference(this as any, "purchase_plan", true);
  public get purchasePlan() {
    return this._purchasePlan;
  }
  public putPurchasePlan(value: SharedImagePurchasePlan) {
    this._purchasePlan.internalValue = value;
  }
  public resetPurchasePlan() {
    this._purchasePlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purchasePlanInput() {
    return this._purchasePlan.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SharedImageTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SharedImageTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      eula: cdktf.stringToTerraform(this._eula),
      gallery_name: cdktf.stringToTerraform(this._galleryName),
      hyper_v_generation: cdktf.stringToTerraform(this._hyperVGeneration),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      privacy_statement_uri: cdktf.stringToTerraform(this._privacyStatementUri),
      release_note_uri: cdktf.stringToTerraform(this._releaseNoteUri),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      specialized: cdktf.booleanToTerraform(this._specialized),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      trusted_launch_enabled: cdktf.booleanToTerraform(this._trustedLaunchEnabled),
      identifier: sharedImageIdentifierToTerraform(this._identifier.internalValue),
      purchase_plan: sharedImagePurchasePlanToTerraform(this._purchasePlan.internalValue),
      timeouts: sharedImageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
